#include <iostream>
using namespace std;

void CoolNumber(unsigned short int cifra)
{
   switch (cifra)
   {
   case 1:
      cout<<"  @\n @@\n  @\n  @\n@@@@@\n\n";
      break;
   case 2:
      cout<<"@@@@\n@  @\n  @\n @\n@@@@\n\n";
      break;
   case 3:
      cout<<"@@@@@\n    @\n@@@@@\n    @\n@@@@@\n\n";
      break;
   case 4:
      cout<<"@   @\n@   @\n@@@@@\n    @\n    @\n\n";
      break;
   case 5:
      cout<<"@@@@@\n@\n@@@@@\n    @\n@@@@@\n\n";
      break;
   case 6:
      cout<<"@@@@@\n@\n@@@@@\n@   @\n@@@@@\n\n";
      break;
   case 7:
      cout<<"@@@@\n   @\n  @@@\n   @\n   @\n\n";
      break;
   case 8:
      cout<<"@@@@@\n@   @\n@@@@@\n@   @\n@@@@@\n\n";
      break;
   case 9:
      cout<<"@@@@@\n@   @\n@@@@@\n    @\n    @\n\n";
      break;
   case 0:
      cout<<"@@@@@\n@   @\n@   @\n@   @\n@@@@@\n\n";
      break;
   default:
      break;
   }
}

int main()
{
   long long int x;   cin>>x;
   long long int putere=1;
   while (x/putere!=0)
      putere*=10;
   for (putere/=10;putere!=0;putere/=10)
      CoolNumber(x/putere%10);
   return 0;
}