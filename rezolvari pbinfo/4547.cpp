#include <iostream>
using namespace std;

int main()
{
    int n, k, S = 0, C = 0, number;
    cin >> n >> k;
    for (int i = 0; i < n; i++)
    {
        cin >> number;
        if (number % k == 0)
            S += number;
        if (number % 2 == 0)
            C++;
    }
    cout << S << " " << C;
    return 0;
}