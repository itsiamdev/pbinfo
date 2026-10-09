#include <iostream>
using namespace std;

int main() {
    long long int nr, s=1, i;
    cin >> nr;
    for(i = 1; i <= nr; i++)
        s *= i; // echivalent cu s = s * i
    cout << s;
}