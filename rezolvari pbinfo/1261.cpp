#include <iostream>
using namespace std;

int main()
{
    int x, k = 0;

    cin >> x;

    while (x != 0)
    {
        if (x % 2 == 0)
            k++;

        cin >> x;
    }

    if (k == 0)
        cout << "NU EXISTA";
    else
        cout << k;

    return 0;
}