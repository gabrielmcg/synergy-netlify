# OS Deployment Plan Custom Attributes

Currently, the code responsible for the provisioning of server profiles expects the OS Deployment Plans to expose two and 
only two custom attributes named 'NIC1' and 'NIC2'. This means the server profiles templates using the OSBP will only 
see the NIC1 and NIC2 attributes as shown below (OS Deployment section of the RedHat760_fcoe_gen9_4_v1.0.3 
server profile template).  The IPV4 configuration should be configured using "User-specified" because the
 playbooks will assign the IP addresses (from the data in the host inventory).  
 All other attributes are populated automatically.

For more information about custom attributes and the type of attributes available, see the  
[HPE Synergy Image Streamer 4.1 User's Guide](https://support.hpe.com/hpsc/doc/public/display?docId=emr_na-a00039930en_us&docLocale=en_US).


