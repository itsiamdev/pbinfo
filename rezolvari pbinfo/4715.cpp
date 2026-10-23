#include <iostream>
using namespace std;


long long put(int n, int putere) {
    long long nr = 1;
    for (int i = 1; i <= putere; i++)
        nr *= n;
    return nr;
}

int main()
{
    int c, n;
    cin >> c >> n;
    if (c == 1) { // nr vesele
        if (n == 1)
            cout << 5;
        else
            cout << 4 * put(5, n - 1);
    }
    else if (c == 2) // nr triste
        cout << put(5, n);
    else { // nr indiferente
         cout << 9 * put(10, n - 1) - put(5, n) - 4 * put(5, n - 1);
    }
    return 0;
}