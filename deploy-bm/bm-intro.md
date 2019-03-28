# Introduction to bare metal workers

This solution leverages HPE Synergy OneView 4.10 and HPE Image Streamer 4.10 to provision bare metal servers with an operating system so they can be added to a Docker/Kubernetes cluster as worker nodes. Before you can provision servers using the playbooks, you need to create one or more Image Streamer Operating System Deployment Plans (OSDP) and one or more OneView Server Profile Templates (SPT).

HPE OneView Server Profile Templates are used to create the OneView Server Profiles (SP) that are applied to the Synergy compute modules, also known as bare metal servers.  Each bare metal server listed in the Ansible inventory maps to exactly one OneView Server Profile Template. Depending on the environment, you may need to create one or more SPTs depending on the type of servers available in your Synergy environment. In the simplest case, where all servers are of the same Server Hardware Type and there is a single enclosure group, a single SPT can be used. If, on the other hand, the pool of compute modules consists of different server types (for example Gen9 and Gen10 compute modules), then a separate SPT must be created for each Server Hardware Type. When creating the SPT, an OSDP is specified. In most cases, the same OSDP can be used for all compute modules running the same operating system.  If you want to deploy both Windows and Linux worker nodes in the same cluster, you need to create a minimum of two SPTs and two OSDPs.  One SPT will specify an OSDP that deploys Linux, while a separate SPT will specify a different OSDP that deploys Windows.

Image Streamer Operating System Deployment Plans leverage Operating System Build Plans (OSBP), each of which contains one or more Plan Scripts that are used to configure the deployed Operating System.  Each Plan Script may expose one or more OS custom attributes.  Custom attributes are parameters that can either be hard-coded to specific values or exposed to the deployment plan and configured by the SPT using the deployment plan.  Custom attributes can hold various data types such as IP addresses, host names, product keys etc.  The OSDP also specifies a golden image, which will be used when deploying the OS on the server.

When it comes to the provisioning of bare metal servers, the Ansible playbooks create Server Profiles (SP) based on specified SPT and assign the server profiles to physical compute modules in the Synergy enclosures. The provisioning of the operating system is done when the server profile is applied using the Image Streamer OSDP specified in the SPT. Once the servers are provisioned, they are powered on by the playbooks.


## Playbooks and configuration

When it comes to the provisioning of bare-metal servers, the Ansible playbooks create Server Profiles (SP) based on specified SPT and assign the server profiles to physical compute modules in the Synergy enclosures. The provisioning of the operating system is done when the server profile is applied using the Image Streamer OSDP specified in the SPT. Once the servers are provisioned, they are powered on by the playbooks.

The playbook responsible for the provisioning of the bare metal servers uses the following information stored in Ansible variables for each worker node:

- **ov_template:** The name of the SPT to use when creating the SP for this compute module
- **ov_ansible_connection_name** and **ov\_ansible\_redundant\_connection\_name:** The names of the network connections in the server profile template that maps to the network where the Ansible controller node resides. Currently redundant connections are supported so you must specify two connections on the Ansible network/VLAN
- **enclosure** and **bay:** The target compute module to provision, specified by the name of the Synergy enclosure where the compute module resides and the bay number of the compute module


Below is an excerpt of a sample inventory file. The enclosure and bay number is specified for each bare-metal server. Because this particular HPE Synergy environment contains compute modules of different hardware types, each worker node entry also specifies the HPE OneView Server Profile Template to use when deploying the OS. 

In this example, both Gen9 and Gen10 compute modules are used and  Linux and Windows worker nodes
are being deployed.

```
[bm_wrk_lnx]
clh-worker04 ip_addr='10.60.59.25/16' enclosure='Rack1-Mid-CN759000BZ' bay=8 ov_template='RedHat760_fcoe_gen9_4_v1.0.3'

clh-worker06 ip_addr='10.60.59.27/16' enclosure='Rack1-Top-CN7515048P' bay=5 ov_template='RedHat760_fcoe_gen9_3_v1.0.3'
 
[bm_wrk_win]
clh-worker05 ip_addr='10.60.59.26/16'  enclosure='Rack1-Top-CN7515048P' bay=2 ov_template='Win2016_fcoe_gen10_3_v1.0.3'
```

Note the difference in the Linux template names for the separate Server Hardware Types of **Gen 9 4** and **Gen 9 3**. This can be seen in the following figure taken from HPE OneView:


![ "HPE OneView Server Hardware Types"][media-oneview-server-hardware-types]

**Figure.** HPE OneView Server Hardware Types




[media-oneview-server-hardware-types]:<../media/oneview-server-hardware-types.png> 









