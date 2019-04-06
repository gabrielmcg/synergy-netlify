# Using HPE 3PAR when deploying NFS provisioner for Kubernetes

## Prerequisites

-   Configure the variables described in the section `Kubernetes Persistent Volume configuration`
-   Install the `kubectl` binary on your Ansible box
-   Install the UCP Client bundle for the `admin` user
-   Confirm that you can connect to the cluster by running a test command, for example, `kubectl get nodes`




##Setting up HPE 3PAR
The following section outlines the steps you need to follow in order to configure a Virtual File Server and a share for use by the Kubernetes NFS provisioner.

Log in to the HPE 3PAR StoreServ Management console and create a virtual file server (VFS):

1. In the `General` section, specify a name, in this instance `hpe_vfs3par`

    !["Figure.  Create Virtual File Server - General"][media-3par-create-vfs-png]

    **Figure.**  Create Virtual File Server - General

2. 





[media-3par-create-vfs-png]:<../media/3par-create-vfs.png> "Figure.  Create Virtual File Server - General"
