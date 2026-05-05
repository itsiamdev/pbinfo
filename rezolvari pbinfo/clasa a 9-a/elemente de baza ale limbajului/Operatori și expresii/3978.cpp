#include <iostream>
using namespace std;

int main()
{
    int s, a, b, c;
    cin >> a >> b >> c;
    /// S(a, b) = S(1, b) - S(1, a-1)
    s = b * (b + 1) / 2 - a * (a - 1) / 2;
    cout << s << " ";
    /// S(b, c) = S(1, c) - S(1, b-1)
    s = c * (c + 1) / 2 - b * (b - 1) / 2;
    cout << s << " ";
    /// S(a, c) = S(1, c) - S(1, a-1)
    s = c * (c + 1) / 2 - a * (a - 1) / 2;
    cout << s << " ";
    return 0;
}