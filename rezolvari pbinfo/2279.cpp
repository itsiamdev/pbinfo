#include <iostream>

using namespace std;

int main()
{
    int j; cin >> j;
    long long particip, punctaj, x;

    while(j--)
    {
        cin >> particip >> punctaj;
        long long maxim = punctaj/10;
        long long maxim_usor = punctaj/2;

        int usor = 0, dificil = 0;

        while(particip--)
        {
            cin >> x;
            if(x >= maxim_usor)
            {
                usor++;
            }
            else if(x <= maxim)
            {
                dificil++;
            }
        }
        if(usor == 1 && dificil == 2)
        {
            cout << "da" << '\n';
        } else cout << "nu" << '\n';
    }

    return 0;
}