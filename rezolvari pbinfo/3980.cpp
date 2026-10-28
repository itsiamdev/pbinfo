#include <iostream>
#include <algorithm>

int main()
{
   int n, x;
   std::cin >> n;
   int min, max;

   std::cin >> x;
   min = x;
   max = x;
   for (int i = 2; i <= n; ++i)
   {
      std::cin >> x;
      
      if (x > max)
         max = x;
      else if (x < min)
         min = x;
   }

   std::cout << min + max;
   return 0;
}