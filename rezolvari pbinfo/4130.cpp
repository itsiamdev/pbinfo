#include <fstream>
#include <cmath>
using namespace std;
ifstream fin ("rotire25.in");
ofstream fout ("rotire25.out");

int operatie(int x, int inm)
{
   x *= inm;

   int ans = 0;
   while (x)
   {
      if (x%10 == 0)
      { x/=10; continue; }

      ans = ans*10 + x%10;
      x /= 10;
   }

   return ans;
}


int ultCifPutere(int a, int b)
{
   if (b == 0)
      return 1;

   a %= 10;
   if (a == 0 || a == 1 || a == 5 || a == 6)
      return a;
   return (int) pow(a, b%4 + 4) % 10;
}


int primaCif(int x)
{
   while (x > 9)
      x /= 10;
   return x;
}


int main()
{
   int c, x, k;
   fin >> c >> x >> k;

   if (c == 1)
   {
      fout << ultCifPutere(x, k) * primaCif(x);
   }

   if (c == 2)
   {
      // numerele se repeta cate doua..
      int num1 = operatie(x, 5);
      int num2 = operatie(num1, 2);
      int num3 = operatie(num2, 5);
      int num4 = operatie(num3, 2);

      if (k == 1)
         fout << num1;
      else if (k == 2)
         fout << num2;
      else
         if (k % 2 == 1)
            fout << num3;
         else
            fout << num4;
   }
}