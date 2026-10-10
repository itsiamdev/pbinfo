#include <iostream>
#include <cstring>
using namespace std;
int main(){
    int n;
    cin >> n;
    unsigned long long prod = 1;
    for(int i = 2; i <= n * 2; i += 2){
        prod *= i;
    }
    cout << prod;
}