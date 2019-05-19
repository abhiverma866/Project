/*
 * Copyright (c) 2006, Swedish Institute of Computer Science.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the Institute nor the names of its contributors
 *    may be used to endorse or promote products derived from this software
 *    without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE INSTITUTE AND CONTRIBUTORS ``AS IS'' AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE INSTITUTE OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 *
 * This file is part of the Contiki operating system.
 *
 */

/**
 * \file
 *         A very simple Contiki application showing how Contiki programs look
 * \author
 *         Adam Dunkels <adam@sics.se>
 */

#include "contiki.h"
//#include <math.h>
//#include "sys/ctimer.h"
//#include "lib/random.h"
#include <stdio.h> /* For printf() */
#include "sys/stimer.h"
#include "powertrace.h"
//#include "net/rime/rime.h"


//#define RPL_PROBING_INTERVAL 120
//static float i;
//static float j;
//static float i;
//static float j;
//static struct stimer st;
/*---------------------------------------------------------------------------*/
PROCESS(hello_world_process, "Hello world process");
AUTOSTART_PROCESSES(&hello_world_process);
/*---------------------------------------------------------------------------*/
PROCESS_THREAD(hello_world_process, ev, data)
{
  PROCESS_BEGIN();

  /* Start powertracing, once every two seconds. */
  //powertrace_start(CLOCK_SECOND * 5);

  //j = 2.1;
  //i = j + 3.1;
  //printf("%i\n", (int)powf(10, i));
  // while(1==1)
  // {
  // stimer_set(&st, 5);
  // while(stimer_expired(&st)!=1){
  //   /*Just wait for some time*/
  // }

  printf("Hello, world\n");
  //printf("Clock second %lu\n", CLOCK_SECOND);
  //printf("%d\n", random_rand());
  //printf("%d\n", (random_rand()%10));
  //printf("%d\n",(((RPL_PROBING_INTERVAL) / 2) + random_rand() % (RPL_PROBING_INTERVAL)));  
 
  PROCESS_END();
}
/*---------------------------------------------------------------------------*/
