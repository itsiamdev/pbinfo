#include <iostream>
using namespace std;

int main()
{
   short int n;
   long long int p,putere=1;
   cin>>n>>p;
   while (putere<=p)
   {
      cout<<putere<<' ';
      putere *= n;
   }
   return 0;
}