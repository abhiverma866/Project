#include <stdio.h>
#include "net/ip/uip.h"
#include "net/rpl/rpl-private.h"
int firstDID;
uip_ip6addr_t DIOsrcaddr;
rpl_dio_t prevDIO;
