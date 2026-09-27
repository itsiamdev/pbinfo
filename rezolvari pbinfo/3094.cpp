#include <iostream>
using namespace std;

int main()
{
   short z, pb, b, pt, t;
   cin>>z>>pb>>b>>pt>>t;
   bool ok = 0;
   for (; z>=1; z--)
   {
      pb += b;
      pt += t;
      if (pb == pt)
      {
         ok = 1; break;
      }
   }
   if (ok)
      cout << pb;
   else
      cout << -1;
   return 0;
}