#include <stdio.h>
#include <stdlib.h>

int main(){
	//Basically a string
	char name[];

	//scanf to input data,, specific datatype and where to store it
	printf("Please enter your name: ");
	scanf("%s", &name);
	printf("Your name is %s.\n",name);

	//Int input
	int age;
	printf("Please enter your age: ");
	scanf("%d", &age);
	printf("Your age is %d.\n",age);

	//Double input
	double gpa;
	printf("Please enter your gpa: ");
	scanf("%lf", %gpa);
	printf("Your gpa is %f.\n",gpa);

	//Character
	char test;
      	printf("Please enter a test character: ");
	scanf("%c",%test);
	printf("The test character is %c.\n",test);

	//Scan entire line of text
		//A string with a fixed length
	char name2[20];
	printf("Please enter your name: ");
	fgets(name3, 20,stdin);
	//FGets(variable to store it in, max length, stdin which is "standard input")
	printf("Your name is %s.\n",name2);

	return 0;
}
