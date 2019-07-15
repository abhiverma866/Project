#include<stdio.h>
#include<conio.h>
#define SIZE 100
int i,j,n,x[SIZE],median,temp,temp1,f[SIZE],cf[SIZE],sort[SIZE];

void main()
{
         //clrscr();
         printf("Enter the number of observation: ");
         scanf("%d",&n);

         for(i=0;i<n;i++)
         {
                  printf("Enter the observation %d: ",i+1);
                  scanf("%d",&x[i]);
                  printf("Enter the freq: ");
                  scanf("%d",&f[i]);
                  sort[i]=f[i];
         }


         cf[0]=f[0];
         for(i=0;i<n;i++)
         {
                  cf[i+1]=cf[i]+f[i+1];
         }
         printf(" Xi Fi CF ");
         for(i=0;i<n;i++)
         printf("%d %d %d ",x[i],f[i],cf[i]);


         for(i = 0; i < n-1; i++)
         {
           for(j = i + 1; j < n ;j++)
           {
             if(sort[i] > sort[j])
             {
                      //Exchange them
                      temp = sort[i];
                      sort[i] =sort[j];
                      sort[j] = temp;
             }
           }
         }

         for(i=0;i<n;i++)
         printf("%d ",sort[i]);
         for(i=1;i<=3;i++)
         {
                   printf(" Quartile %d-->",i);
                   printf("Q%d is: %d ",i,sort[ (i*(n+1))/4-1]);
         }

  getch();
}
