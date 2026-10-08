#include <fstream>
using namespace std;

int main()
{
   ifstream cin ("multimi2.in");
   ofstream cout ("multimi2.out");
   int cerin, a,m1, b,m2, i;
   cin >> cerin >> a>>m1 >> b>>m2;

   a += m1 - 1,  b += m2 - 1;
   /// [m1, a] * [m2, b]

   if (m1 > m2)
   {
      m1 ^= m2,  m2 ^= m1,  m1 ^= m2;
      a  ^=  b,  b  ^=  a,  a  ^=  b;
   }
   if (!(--cerin))
   {
      cerin = 10;
      for (i=m1; i<=a; ++i)
         cout << i << ' ';
      if (m2 <= a and a < b)
         for (i=a+1; i<=b; ++i)
            cout << i << ' ';
      else if (a < m2)
         for (i=m2; i<=b; ++i)
            cout << i << ' ';
   }
   else
   {
      if (m2 <= a and a < b)
      {
         cerin = 10;
         for (i=m2; i<=a; ++i)
            cout << i << ' ';
      }
      else if (b <= a)
      {
         cerin = 10;
         for (i=m2; i<=b; ++i)
            cout << i << ' ';
      }
   }

   if (cerin != 10)
      cout << -1;
   return 0;
}