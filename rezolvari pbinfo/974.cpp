#include <iostream>
#define ll long long

using namespace std;

int main(){

    ll sum = 0;
    long long n, k, multiplii = 0;
    
    cin >> n >> k;
    multiplii = n / k;
    sum += (k * (k - 1) / 2) * multiplii; // [n / k] sume gauss de la 1 la k - 1

    long long dif = n - (multiplii * k + 1) + 1; // 1 suma incompleta: de la 1 la ... (< k - 1)
    sum += (dif * (dif + 1) / 2);

    cout << sum;
    
}