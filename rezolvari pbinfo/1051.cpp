#include <fstream>
using namespace std;
ifstream cin("bete1.in");
ofstream cout("bete1.out");

unsigned long long int suma = 0;
int main(){
  int n, max1 = -1, max2 = -1, nrmaxa = 0, nrmaxb = 0;
  cin >> n;
  for(int i = 1; i <= n; ++i){
    int x;
    cin >> x;
    suma += x;
    if(x > max1){
      max1 = x;
      nrmaxa = 1;
    }
    else if(x == max1) nrmaxa++;
  }
  int cnt = 0, max3 = -1;
  for(int i = 1; i <= n; ++i){
    int x;
    cin >> x;
    suma += x;
    if(x > max2){
      max2 = x;
      nrmaxb = 1;
    }
    else if(x == max2) nrmaxb++;
  }
 cout << suma / n << '\n' << max1 + max2 << "\n" << min(nrmaxa, nrmaxb);

    return 0;
}