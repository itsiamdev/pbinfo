#include <iostream>
using namespace std;

int main() {
    int n, s = 0, x, i;
    cin >> n;
    for(i = 1; i <= n; i++) {
        s += i*2;
    }
    cout << "Suma este " << s;
}