#include <iostream>
using namespace std;


int main()
{
   int n;
   cin >> n;

   cout << sizeof(int)*8 - __builtin_clz(n) - 1;

   return 0;
}