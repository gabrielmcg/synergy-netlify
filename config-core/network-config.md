# Networking configuration

All network-related variables are mandatory and are described in the table below.

|Variable|File|Description|
|:-------|:---|:----------|
|nic_name|group_vars/all/vars|Name of the device, for RHEL this is typically `ens192` and it is recommended to leave it as is.|
|gateway|group_vars/all/vars|IP address of the gateway to be used|
|dns|group_vars/all/vars|List of DNS servers to be used, in list format, i.e. ['`10.10.173.1`','`10.10.173.2`'...]|
|domain_name|group_vars/all/vars|Domain name for your Virtual Machines|
|ntp_servers|group_vars/all/vars|List of NTP servers to be used, in list format, i.e. ['`1.2.3.4`','`0.us.pool.net.org`'...]|
