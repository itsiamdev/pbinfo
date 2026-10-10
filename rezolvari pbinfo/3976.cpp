#include <iostream>
using namespace std;


int main()
{
   int n;
   long long prod = 1;
   cin >> n;

   for (int i = 1; i <= n; ++i)
      prod *= i*2-1;

   cout << prod;
   return 0;
}