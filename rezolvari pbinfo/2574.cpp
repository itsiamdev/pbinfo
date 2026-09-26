#include <iostream>
using namespace std;

int main()
{
   int n,m; cin>>n>>m;

   cout<<"__0_0__";        //1
   for (int i=1;i<m;i++)
      cout<<"___0_0__";
   cout<<'_'<<endl;
   if (n==1)
      return 0;
   for (int i=2;i<n;i++)   //mijloc
   {
      cout<<"_0___0_";
      for (int i=1;i<m;i++)
         cout<<"__0___0_";
      cout<<'_'<<endl;
   }
   for (int i=1;i<=m;i++)  //ultim
      cout<<"0_____0_";
   return 0;
}