#include <iostream>

using namespace std;

int main() {
   int n, c;
   cin >> c >> n;
   if(c == 1){
       //patrat
    for(int i = 1; i <= n; ++ i){
        for(int d = 1; d <=n; ++d) cout << i;
        cout << '\n';
    }
   }
   if( c == 2){
    //romb
    for(int i = 1; i <= n; ++ i){
      for(int d = 1; d <= n - i; ++d) cout << ' ';
      for(int j = 1; j <=2 * i - 1; ++j) cout << i;
      cout << '\n';
    }
    for(int i = n - 1; i > 0; --i){
        for(int d = 1; d <= n - i; ++d) cout << ' ';
        for(int j = 1; j <= 2 * i - 1; ++j) cout << i;
        cout << '\n';
    }
   }
   if( c == 3){
       //dreptunghi
    for(int i = 1; i <= n; ++ i){
        for(int d = 1; d <=n * 2; ++d) cout << i;
        cout << '\n';
    }
   }
   if(c == 4){
//triunghi isoscel

for(int i = 1; i <= n; ++ i){
      for(int d = 1; d <= n - i; ++d) cout << ' ';
      for(int j = 1; j <=2 * i - 1; ++j) cout << i;
      cout << '\n';
  }
   }
  
  
  
    return  0;
}