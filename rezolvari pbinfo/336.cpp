#include <iostream>

using namespace std;

int n;
long long int s;

int main() {
    cin >> n;

    for (int i = 1; i <= n; i++)
        s += i * (n - i + 1);

    cout << "Rezultatul este " << s << "\n";

    return 0;
}