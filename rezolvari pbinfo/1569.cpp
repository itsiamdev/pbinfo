#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    for(int cif = 1; cif <= n; cif++)
        for(int rand = 1; rand <= cif; rand++) {
            for(int elem = 1; elem <= cif; elem++)
                cout << cif;
            cout << endl;
        }
}