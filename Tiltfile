allow_k8s_contexts(['minikube', 'my-dev-cluster'])

load('ext://helm_resource', 'helm_resource', 'helm_repo')
load('ext://uibutton', 'cmd_button', 'location')

# block Tiltfile execution if missing required tool (e.g. Helm)
def require_tool(tool):
    tool = shlex.quote(tool)
    local(
        command='command -v {tool} >/dev/null 2>&1 || {{ echo >&2 "{tool} is required but was not found in PATH"; exit 1; }}'.format(
            tool=tool
        ),
    )


def build(svc_name, svc_dir):
    # img name should be the full path to the image registry for remote cluster deploys
    # img_name = 'my-registry/image'

    # img name can simply be svc_name for local deploys
    img_name = svc_name

    # docker_build('<image-name>', '<build-context>', dockerfile='<path-to-dockerfile>')
    docker_build(img_name, svc_dir)


def deploy(svc_name, 
           svc_dir,
           helm_dir_path=None,
           port_forward=None,
           resource_deps=[]):

    # build docker image prior to deploying helm chart
    build(svc_name, svc_dir)

    # set default for helm directory if unset
    if not helm_dir_path:
        helm_dir_path = "{}/helm".format(svc_dir)

    # build helm resource, set dependencies, resource name, and labels
    # image_keys should correspond to image repo and tag in helm values.yaml file
    helm_resource(
        svc_name,
        helm_dir_path,
        labels=[svc_name],
        deps=[helm_dir_path],
        resource_deps=resource_deps,
        image_deps=[svc_name],
        image_keys=[('image.repository', 'image.tag')]
    )

    # create port forward on resource matching workload
    if port_forward:
        k8s_resource(workload=svc_name, port_forwards=port_forward)


def deploy_postgres():
    db_password = 'password'
    db_name = 'planetexpress'

    # deploy postgres using the bitnami helm repo postgresql chart
    helm_resource(
        'postgresql',
        'bitnami/postgresql',
        labels=['postgresql'],
        resource_deps=['helm-repo-bitnami'],
        flags=[
            '--set', 'global.postgresql.auth.postgresPassword={}'.format(db_password),
            '--set', 'global.postgresql.auth.database={}'.format(db_name)
        ]
    )

    # port forward so database can be accessed via db browser locally
    k8s_resource(workload='postgresql', port_forwards=5432)


def setup_buttons():
    # migrate button
    cmd_button(name='db migrate',
            resource='postgresql',
            text='Database Migrate',
            argv=['/bin/bash', '-c', 'cd ./backend && yarn prisma:migrate']
    )

    # seed button
    cmd_button(name='db seed',
            resource='postgresql',
            text='Database Seed',
            argv=['/bin/bash', '-c', 'cd ./backend && yarn prisma:seed']
    )

    # graphql playground button
    cmd_button(name='gql playground',
            resource='backend',
            text='Graphql Playground',
            argv=['/bin/bash', '-c', 'open http://localhost:3001/graphql']
    )



# require helm installed on user's machine
require_tool('helm')

# add bitnami helm repo so we can use bitnami charts
helm_repo(
    'bitnami',
    'https://charts.bitnami.com/bitnami',
    labels=['helm-repo-bitnami'],
    resource_name='helm-repo-bitnami'
)

setup_buttons()

# deploy our databse and backend service
deploy_postgres()
deploy('backend', './backend', resource_deps=['postgresql'], port_forward='3001:3000')
deploy('frontend', './frontend', resource_deps=['backend'], port_forward='3002:3000')
