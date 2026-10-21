#include <iostream>
using namespace std;

int main()
{
   int n, x, cnt;
   cin >> n;

   cnt = 0;
   while (n--)
   {
      cin >> x;
      if (10 <= x && x <= 99)
         cnt++;
   }

   cout << cnt;
   return 0;
}