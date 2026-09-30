#include <iostream>
#include <climits>
using namespace std;

int main()
{
   unsigned long long x, y;
   int n;
   cin >> n;
   for (; n>=1; n--)
   {
      cin >> x >> y;
      if (x && ULLONG_MAX/x < y)//!daca x este 0, toata expresia se va face falsa, adica 0.
         cout << "Overflow!\n";
      else
         cout << x * y << '\n';
   }
   return 0;
}