#include <iostream>
using namespace std;

int main()
{
   int n, k, i, x, sum;
   cin >> n >> k;
   sum = n;
   for (i=0; i<k; i++)
   {
      cin >> x;
      sum += x;
   }
   if (n == sum)
      cout << "DA";
   else
      cout << "NU";
   return 0;
}