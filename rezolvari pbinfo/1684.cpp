#include <iostream>
#include <math.h>
using namespace std;


int main() {
   
   int n, suma = 1;
    cin >> n;
    cout << "1 ";
    int i2 = 4;
    int cnt = 1;
    while(cnt < n){
        if(sqrt(i2) == (int)sqrt(i2)){
            cnt++;
            suma +=i2;
            cout << suma << " ";
        }
        i2++;
    }


    return  0;
}