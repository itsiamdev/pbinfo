#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    for(int i = 1; i <= n; i++) {
        if(i == n) { // ultima linie
            for(int j = 1; j <= 2*n; j++) {
                if(j % 2 == 1) {
                    cout << "*";
                } else {
                    cout << " ";
                }
            }
        } else { // primele n-1 linii
            int a, b;
            a = n - i + 1; // pozitia primei stelute
            b = n + i - 1; // pozitia celei de-a doua stelute
            for(int j = 1; j <= 2*n; j++) {
                if(j == a || j == b) {
                    cout << "*";
                } else {
                    cout << " ";
                }
            }
            cout << "\n";
        }
    }
}