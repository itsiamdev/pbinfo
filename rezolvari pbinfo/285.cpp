#include <cmath>
#include <iostream>
using namespace std;

int main()
{
   int k;   cin>>k;
   int sqrtk=sqrt(k);
   for (int i=1;i<=sqrtk;i++)
   {
      if (i<=(int)(sqrt(k-i*i)))
      {
         if (sqrt(k-i*i)==(int)(sqrt(k-i*i)))
            cout<<i<<' '<<sqrt(k-i*i)<<endl;
      }
      else
         break;

   }
   return 0;
}