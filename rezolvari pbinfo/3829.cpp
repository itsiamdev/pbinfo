#include <iostream>
using namespace std;

int main()
{
   int i, j, o, p;
   int n;
   cin >> n;
// primele 4 randuri din exemplu
   for (j = 0; j < n-1; ++j)
   {
      for (i = j+1; i < n; ++i)
         cout << '#';
      for (i = 0; i < j*2 + n; ++i)
         cout << '*';
      for (i = j+1; i < n; ++i)
         cout << '#';

      cout << '\n';
   }
// urmatoarele 5 randuri din exemplu
   for (i = 0; i < n; ++i)
   {
      for (j = 0; j < n*3 - 2; ++j)
         cout << '*';

      cout << '\n';
   }
// ultimele 4 randuri din exemplu
   for (j = 0; j < n-1; ++j)
   {
      for (i = n-j-1; i < n; ++i)
         cout << '#';
      for (i = 0; i < (n-j-1)*2 + n-2; ++i)
         cout << '*';
      for (i = n-j-1; i < n; ++i)
         cout << '#';

      cout << '\n';
   }
   return 0;
}