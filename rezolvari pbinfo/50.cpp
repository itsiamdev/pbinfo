#include <iostream>
using namespace std;

int main() {
    long long int n, s = 0, i, j, p;
    cin >> n;
    for(i = 1; i <= n; i++) {
        p = 1;
        for(j = 1; j <= i; j++)
            p *= j;
        s += p;
    }
    cout << "Rezultatul este " << s;
}