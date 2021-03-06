module.exports = {
  title: 'HPE Enterprise Containers',
  //base: '/Docker-Synergy/',  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' }
    ],

    repo: 'HewlettPackard/Docker-Synergy',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:

    //docsRepo: 'gabrielmcg/vp-netlify-test',
    // if your docs are not at the root of the repo:
    docsDir: 'docs-src',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'devel',

    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',


    sidebar: [
      {
        title: 'Introduction',
        collapsable: true,
        children: [
          '/introduction-syn'
        ]
      },
      {
        title: 'Release notes',
        collapsable: true,
        children: [
          '/rel-notes/new-features-syn',
          '/rel-notes/configuration-updates-syn',
          '/rel-notes/fixed-release-syn'
        ]
      },
      {
        title: 'Solution overview',
        children: [
          'soln-overview/syn-solution-overview',
          'soln-overview/syn-config',
          'soln-overview/solution-config',
          'soln-overview/ha',
          'soln-overview/sizing-syn',
          'soln-overview/disaster-recovery',
          'soln-overview/security'
        ]
      },
      {
        title: 'Solution components',
        children: [
          'soln-components/hardware-syn',
          'soln-components/software',
          'soln-components/application-software'
        ]
      },
      {
        title: 'Preparing the environment',
        children: [
          'prep/verify-prereqs',
          'prep/vsphere-ha',
          'prep/install-vdvs',     
          'prep/create-ansible-node-fedora',
          'prep/create-rhel-template'
        ]
      },
      {
        title: 'Configuring the core components',
        children: [
          'config-core/ansible-config',
          'config-core/edit-inventory',
          'config-core/vmware-config',
          'config-core/network-config',
          'config-core/environment-config',
          'config-core/docker-config',
          'config-core/orchestrator-config',
          'config-core/k8s-config',
          'config-core/edit-vault'
        ]
      },
      {
        title: 'Overview of the playbooks',
        children: [
          'playbooks/playbooks-overview.md',
          'playbooks/core-infrastructure.md',
          'playbooks/optional-playbooks.md',
          'playbooks/backup-restore-playbooks.md',
          'playbooks/convenience-playbooks.md',
          'playbooks/convenience-scripts.md'
        ]
      },
      {
        title: 'Deploying core components',
        children: [
          'deploy/running-playbooks',
          'deploy/create-rhel-vms',
          'deploy/load-balancers',
          'deploy/install-docker-ucp-dtr',
          'deploy/add-rhel-workers'
        ]
      },
      {
        title: 'Post deployment',
        children: [

          'post-deploy/install-kubectl',
          'post-deploy/install-client-bundle',
          'post-deploy/install-helm',
          'post-deploy/k8s-example-guestbook',
          'post-deploy/ucp-metrics'
        ]
      },
      {
        title: 'Configuring Storage',
        children: [
          'storage/nfs-provisioner-3PAR',
          'storage/nfs-provisioner',
          'storage/wordpress-mysql-nfs'
        ]
      },
      {
        title: 'Deploying Windows VM workers',
        children: [
          'deploy-win/deploying-windows-workers',
          'deploy-win/create-template-win',
          'deploy-win/add-windows-workers',
          'deploy-win/windows-config',
          'deploy-win/windows-proxy-fedora',
          'deploy-win/lifecycle-windows'
        ]
      },
      {
        title: 'Deploying bare metal workers',
        children: [
          'deploy-bm/bm-intro',
          'deploy-bm/playbooks-configuration',
          'deploy-bm/osdp-custom-attributes',
          'deploy-bm/rhel-golden-images',
          'deploy-bm/windows-golden-images',
          'deploy-bm/deployment-plans',
          'deploy-bm/server-profile-templates'
        ]
      },

      {
        title: 'Deploying Sysdig monitoring',
        children: [
          'sysdig/deploying-sysdig',
          'sysdig/sysdig',
          'sysdig/install-sysdig',
          'sysdig/monitoring-config-sysdig',
          'sysdig/sysdig-trial',
          'sysdig/deploying-sysdig-k8s',
          'sysdig/deploying-sysdig-swarm'
        ]
      },
      {
        title: 'Deploying Splunk',
        children: [
          'splunk/splunk',
          'splunk/install-splunk',
          'splunk/monitoring-config-splunk',
          'splunk/splunk-ui',
          'splunk/redeploying-splunk-demo'
        ]
      },
      {
        title: 'Deploying Prometheus and Grafana on Kubernetes',
        children: [
          'promgraf-k8s/promgraf-k8s-overview',
          'promgraf-k8s/promgraf-k8s-playbooks',
          'promgraf-k8s/promgraf-k8s-prometheus',
          'promgraf-k8s/promgraf-k8s-grafana'
        ]
      },
      {
        title: 'Deploying Prometheus and Grafana on Docker Swarm',
        children: [
          'promgraf/promgraf-overview',
          'promgraf/promgraf-playbooks',
          'promgraf/monitoring-config-promgraf',
          'promgraf/using-promgraf-swarm'
        ]
      },
      {
        title: 'Backup and restore',
        children: [
          'backup-restore/backup-restore',
          'backup-restore/backup-ucp-dtr',
          'backup-restore/restore-ucp-dtr',
          'backup-restore/docker-persistent-volumes'
        ]
      },
      {
        title: 'Solution lifecycle management',
        children: [
          'lifecycle/lifecycle',
          'lifecycle/lifecycle-syn',
          'lifecycle/lifecycle-vdvs',
          'lifecycle/lifecycle-rhel',
          'lifecycle/lifecycle-docker-ee',
          'lifecycle/lifecycle-monitoring'
        ]
      },
      {
        title: 'Appendices',
        children: [
          'appendices/appendix-a',
          'appendices/appendix-b',
          'appendices/appendix-c',
          'appendices/appendix-d'
        ]
      }
    ]
  }
}
