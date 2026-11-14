#include <fstream>

using namespace std;
ifstream cin("platou4.in");
ofstream cout("platou4.out");
  short x;
int main(){
  short a = -1, b = -1, i = 0;
  while(cin >> x){
      i ++;
      if(x % 2 == 0 && a == -1) a = i;
      if(x % 2 == 0) b = i;
  }

    cout << b - a + 1;


  return 0;
}