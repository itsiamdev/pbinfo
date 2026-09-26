#include <iostream>
using namespace std;

int main()
{
   int n;   cin>>n;
   int i;
   for (int triunghiX=1;triunghiX<=n;triunghiX++)
   {//PRIMELE 2 TRIUNGHIURI
      i=1;
      for (;i<=triunghiX;i++)
         cout<<'*';  //i stelute
      for (int o=1;o<=(n-i+1)*2;o++)
         cout<<' ';  //(n-i+1)*2 spatii
      for (int o=1;o<=n;o++)
         cout<<' ';  //n spatii
      for (i=1;i<=triunghiX;i++)
         cout<<'*';
      cout<<endl;
   }

   for (int patratY=1;patratY<=n;patratY++)
   {//PATRATUL
      i=1;
      for (;i<=n;i++)
         cout<<' ';  //n spatii
      for (i=1;i<=n;i++)
         cout<<'*';  //n stelute
      cout<<endl;
   }

   for (int triunghiY=n;triunghiY>=1;triunghiY--)
   {//ULTIMELE 2 TRIUNGHIURI
      i=triunghiY;
      for (;i>=1;i--)
         cout<<'*';  //triunghiY spatii
      for (i=1;i<=(n-triunghiY)*2;i++)
         cout<<' ';  //(n-triunghiY)*2 spatii
      for (i=1;i<=n;i++)
         cout<<' ';  //n spatii
      for (i=triunghiY;i>=1;i--)
         cout<<'*';
      cout<<endl;
   }

   return 0;
}