// C program to find outliers in the data set 
#include<stdio.h> 
#include <stdlib.h>

#define MAX_NUM_NODE 8  //set total number number of nodes in the network
#define DIO_INTERVAL_THRESHOLD 500 //safe dio interval threshold


// node entry format
typedef struct node_data {    
int src_id;    
float dio_interval;
int dio_count;    
} node_data;

static node_data node_table[MAX_NUM_NODE];  // node table 

//static int dio_interval_threshold; 
static int start, f_mid, s_mid, last; //index for partitioning array

//compare fucntion specific to qsort
/*
int compare_function(const void *a,const void *b) {
int *x = (int *) a;
int *y = (int *) b;
return *x - *y;
}
*/

//bubble sort to sort in ascending order
/*
void bsortDesc(struct node_data node_table[MAX_NUM_NODE], int s)
{
    int i, j;
    struct node_data temp;
    
    for (i = 0; i < s - 1; i++)
    {
        for (j = 0; j < (s - 1-i); j++)
        {
            if (node_table[j].dio_count > node_table[j + 1].dio_count)  //change sign to for ascending to descending
            {
                temp = node_table[j];
                node_table[j] = node_table[j + 1];
                node_table[j + 1] = temp;
            } 
        }
    }
}
*/
void quicksort(struct node_data node_table[MAX_NUM_NODE],int first,int last){
   int i, j, pivot;
   struct node_data temp;

   if(first<last){
     	pivot=first;
    	i=first;
      	j=last;

      while(i<j){
        while(node_table[i].dio_count<=node_table[pivot].dio_count&&i<last)
            i++;
         while(node_table[j].dio_count>node_table[pivot].dio_count)
          j--;
        if(i<j){
            temp=node_table[i];
            node_table[i]=node_table[j];
            node_table[j]=temp;
         }
      }

      temp=node_table[pivot];
      node_table[pivot]=node_table[j];
      node_table[j]=temp;
      quicksort(node_table,first,j-1);
      quicksort(node_table,j+1,last);

   }
}

void compute_indexes(int n){
	start = 0;
	last = n-1;
	if(n%2==0){
		f_mid = n/2 - 1;
		s_mid = n/2;	
	}
	else {
		f_mid = n/2 - 1;
		s_mid = n/2 + 1;
	}
	
	printf("\n");
	printf("first: %d | f_mid: %d | s_mid: %d | last: %d \n", start, f_mid, s_mid, last);	
}

float Quartile_2(struct node_data node_table[MAX_NUM_NODE], int n) {
   if(n%2==0) {
       // if there is an even number of elements, return mean of the two elements in the middle
       return((node_table[n/2].dio_count + node_table[n/2 - 1].dio_count) / 2.0);
   } else {
       // else return the element in the middle
       return node_table[n/2].dio_count;
   }
}

float Quartile_1(struct node_data node_table[MAX_NUM_NODE], int l, int r) {
	int n;
	n = r-l+1;
	if(n%2==0) {
       // if there is an even number of elements, return mean of the two elements in the middle
       return((node_table[n/2].dio_count + node_table[n/2 - 1].dio_count) / 2.0);
   } else {
       // else return the element in the middle
       return node_table[n/2].dio_count;
   }

}

float Quartile_3(struct node_data node_table[MAX_NUM_NODE], int l, int r) {
	int n;
	n = r-l+1;
	if(n%2==0) {
       // if there is an even number of elements, return mean of the two elements in the middle
       return((node_table[r-(n/2)].dio_count + node_table[r-(n/2 - 1)].dio_count) / 2.0);
   } else {
       // else return the element in the middle
       return node_table[r-(n/2)].dio_count;
   }
}

void calculate_outliers(struct node_data node_table[MAX_NUM_NODE], int n) 
{ 
	float IQ_range;
	float lower_outlier_bound;
	float upper_outlier_bound;
	//int lower_outliers;
	//int upper_outliers;
	int i;
	
	compute_indexes(n);
   
	float Q1 = Quartile_1(node_table, start, f_mid);
	float Q2 = Quartile_2(node_table, n);
	float Q3 = Quartile_3(node_table, s_mid, last);
	printf("\n");
	printf("Q1: %f | Q2: %f | Q3: %f\n", Q1, Q2, Q3);
	printf("\n");
	
	// IQR calculation  
	IQ_range = (Q3-Q1);
	printf("IQ_range: %f\n", IQ_range);
	printf("\n");

	//Computer upper and lower limits
	lower_outlier_bound = Q1-(1.5*IQ_range);
	printf("lower_outlier_bound: %f\n", lower_outlier_bound);
	upper_outlier_bound = Q3+(1.5*IQ_range);
    printf("upper_outlier_bound: %f\n", upper_outlier_bound);
    
    printf("\n");
    
   int flag;
   flag = 0; 
   for(i=0;i<n;i++)
   {
   	if(node_table[i].dio_count<lower_outlier_bound || node_table[i].dio_count>upper_outlier_bound)
   	{
   		//lower_outliers = node_table[i].dio_count;
   		//printf("lower_outlier is id: %d | dio_count: %d\n", node_table[i].src_id, node_table[i].dio_count);
   		printf("Outlier is id: %d | dio_count: %d\n", node_table[i].src_id, node_table[i].dio_count);
   		if(node_table[i].dio_interval<=DIO_INTERVAL_THRESHOLD){
   			printf("Node %d is MALICIOUS!!\n", node_table[i].src_id);
			//addtoBlacklist() function must be added here      			
		   }
   		flag = 1;
   	}

   	//if(node_table[i].dio_count>upper_outlier_bound)
   	//{
   	//	//upper_outliers = node_table[i].dio_count;
   	//	printf("upper_outlier is id: %d | dio_count: %d\n", node_table[i].src_id, node_table[i].dio_count);
   	//	flag = 1;
   	//}
   }
   
   if(flag==0){
   	printf("There are no possible outliers in the list!!\n");
   }


} 


// Driver Function 
void main() 
{ 
	//int a[] = { 1, 19, 7, 6, 5, 9, 12, 27, 18, 2, 15 };
	//int a[] = {5,7,10,15,19,21,21,22,22,23,23,23,23,23,24,24,24,24,25}; 
	//int a[]  = {15, 16, 23, 23, 24, 25, 26, 27, 59};
	//int a[] = {1, 99, 100, 101, 103, 109, 110, 201};
	//int a[] = {61, 10, 32, 19, 22, 29, 36, 14, 49, 3};
	//int n = sizeof(a)/sizeof(a[0]); //size of array
	//qsort(a, sizeof(a)/sizeof(*a), sizeof(*a), compare_function); //sort the entered array
	
	int i;
	//printf("Array elements: ");
	//for(i=0;i<n;i++){
	//	printf("%d ", a[i]);
	//}
	//printf("\n");
	
	node_table[0].src_id = 1;
	node_table[0].dio_interval = 15.65 ;
	node_table[0].dio_count = 1;
	
	node_table[1].src_id = 2;
	node_table[1].dio_interval = 48.69;
	node_table[1].dio_count = 99;
	
	node_table[2].src_id = 3;
	node_table[2].dio_interval = 18.69;
	node_table[2].dio_count = 101;
	
	node_table[3].src_id = 4;
	node_table[3].dio_interval = 78.63;
	node_table[3].dio_count = 100;
	
	node_table[4].src_id = 5;
	node_table[4].dio_interval = 501;
	node_table[4].dio_count = 201;
	
	node_table[5].src_id = 6;
	node_table[5].dio_interval = 8.36;
	node_table[5].dio_count = 109;
	
	node_table[6].src_id = 7;
	node_table[6].dio_interval = 99.99;
	node_table[6].dio_count = 103;
	
	node_table[7].src_id = 8;
	node_table[7].dio_interval = 99.99;
	node_table[7].dio_count = 110;
	
	printf("\n");
	printf("--------------------Node table-----------------------\n");
	i=0;
	while(i<MAX_NUM_NODE)
	{
   		printf("src_id: %d | dio_interval: %f | dio_count: %d\n", node_table[i].src_id, node_table[i].dio_interval, node_table[i].dio_count);
   		i++;
	}
	
	
	//bsortDesc(node_table, MAX_NUM_NODE); //bubble sort
	
	quicksort(node_table, 0, (MAX_NUM_NODE-1)); //quicksort
	
		
	printf("\n");
	printf("--------------------Sorted Node table-----------------------\n");
	i=0;
	while(i<MAX_NUM_NODE)
	{
   		printf("src_id: %d | dio_interval: %f | dio_count: %d\n", node_table[i].src_id, node_table[i].dio_interval, node_table[i].dio_count);
   		i++;
	}
	
	
	calculate_outliers(node_table, MAX_NUM_NODE);

} 

