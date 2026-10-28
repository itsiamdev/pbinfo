#include <iostream>
using namespace std;

int main() {
    int n, nr, a, b;
    // a va contine numarul maxim, 
    // iar b al doilea cel mai mare numar
    cin >> n;
    cin >> a >> b;
    if(a < b)
        swap(a, b);
    while(n--) {
        cin >> nr;
        if(nr >= a)
            b = a, a = nr;
        else if(nr >= b)
            b = nr;
    }
    cout << a << " " << b;
}