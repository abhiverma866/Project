// C program to find outliers in the data set 
#include<stdio.h> 
#include <stdlib.h>

#define MAX_NUM_NODE 4  //set total number number of nodes in the network

// node entry format
typedef struct node_data {    
int id;    
float timestamp;
int count;    
} node_data;

node_data node_table[MAX_NUM_NODE];  // node table 

int start, f_mid, s_mid, last; //index for partitioning array

//compare fucntion specific to qsort
int compare_function(const void *a,const void *b) {
int *x = (int *) a;
int *y = (int *) b;
return *x - *y;
}

//bubble sort to sort in ascending order
void bsortDesc(struct node_data node_table[MAX_NUM_NODE], int s)
{
    int i, j;
    struct node_data temp;
    
    for (i = 0; i < s - 1; i++)
    {
        for (j = 0; j < (s - 1-i); j++)
        {
            if (node_table[j].count > node_table[j + 1].count)  //change sign to for ascending to descending
            {
                temp = node_table[j];
                node_table[j] = node_table[j + 1];
                node_table[j + 1] = temp;
            } 
        }
    }
}

//void quicksort(int *number,int first,int last){
//   int i, j, pivot, temp;
//
//   if(first<last){
//      pivot=first;
//      i=first;
//      j=last;
//
//      while(i<j){
//         while(number[i]<=number[pivot]&&i<last)
//            i++;
//         while(number[j]>number[pivot])
//            j--;
//         if(i<j){
//            temp=number[i];
//            number[i]=number[j];
//            number[j]=temp;
//         }
//      }
//
//      temp=number[pivot];
//      number[pivot]=number[j];
//      number[j]=temp;
//      quicksort(number,first,j-1);
//      quicksort(number,j+1,last);
//
//   }
//}

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

float Quartile_2(int* a, int n) {
   if(n%2==0) {
       // if there is an even number of elements, return mean of the two elements in the middle
       return((a[n/2] + a[n/2 - 1]) / 2.0);
   } else {
       // else return the element in the middle
       return a[n/2];
   }
}

float Quartile_1(int* a, int l, int r) {
	int n;
	n = r-l+1;
	if(n%2==0) {
       // if there is an even number of elements, return mean of the two elements in the middle
       return((a[n/2] + a[n/2 - 1]) / 2.0);
   } else {
       // else return the element in the middle
       return a[n/2];
   }

}

float Quartile_3(int* a, int l, int r) {
	int n;
	n = r-l+1;
	if(n%2==0) {
       // if there is an even number of elements, return mean of the two elements in the middle
       return((a[r-(n/2)] + a[r-(n/2 - 1)]) / 2.0);
   } else {
       // else return the element in the middle
       return a[r-(n/2)];
   }
}

void calculate_outliers(int* a, int n) 
{ 
	float IQ_range;
	float lower_outlier_bound;
	float upper_outlier_bound;
	int lower_outliers;
	int upper_outliers;
	int i;
	
	compute_indexes(n);
   
	float Q1 = Quartile_1(a, start, f_mid);
	float Q2 = Quartile_2(a, n);
	float Q3 = Quartile_3(a, s_mid, last);
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
   	if(a[i]<lower_outlier_bound)
   	{
   		lower_outliers = a[i];
   		printf("lower_outlier %d\n", lower_outliers);
   		flag = 1;
   	}

   	if(a[i]>upper_outlier_bound)
   	{
   		upper_outliers = a[i];
   		printf("upper_outlier %d\n", upper_outliers);
   		flag = 1;
   	}
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
	int a[] = {67,88,114,546};
	int n = sizeof(a)/sizeof(a[0]); //size of array
	qsort(a, sizeof(a)/sizeof(*a), sizeof(*a), compare_function); //sort the entered array
	
	int i;
	printf("Array elements: ");
	for(i=0;i<n;i++){
		printf("%d ", a[i]);
	}
	printf("\n");
	
//	node_table[0].id = 1;
//	node_table[0].timestamp = 15.65 ;
//	node_table[0].count = 21;
//	
//	node_table[1].id = 2;
//	node_table[1].timestamp = 48.69;
//	node_table[1].count = 158;
//	
//	node_table[2].id = 3;
//	node_table[2].timestamp = 18.69;
//	node_table[2].count = 156;
//	
//	node_table[3].id = 4;
//	node_table[3].timestamp = 40.48;
//	node_table[3].count = 46;
	
	

//	printf("\n");
//	printf("--------------------Node table-----------------------\n");
//	i=0;
//	while(i<4)
//	{
//   		printf("id: %d | timestamp: %f | count: %d\n", node_table[i].id, node_table[i].timestamp, node_table[i].count);
//   		i++;
//	}
//	
//	
//	 bsortDesc(node_table, MAX_NUM_NODE);
	
		
//	printf("\n");
//	printf("--------------------Sorted Node table-----------------------\n");
//	i=0;
//	while(i<4)
//	{
//   		printf("id: %d | timestamp: %f | count: %d\n", node_table[i].id, node_table[i].timestamp, node_table[i].count);
//   		i++;
//	}
//	
	
	calculate_outliers(a,n);

} 

