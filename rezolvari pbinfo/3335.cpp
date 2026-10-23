#include <iostream>
using namespace std;

int main()
{
   long long c, p, k;
   cin >> c >> p;
   if (c <= p)
      cout << c;
   k = (c - (p-1)*p/2) / p;
   if (k <= 0)
      cout << c;
   else
      cout << c - (k*p + (p-1)*p/2);
   return 0;
}