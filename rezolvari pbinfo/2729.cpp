#include <iostream>

using namespace std;

int n, m;
unsigned long long int sRez, sPut, prMin=922337203685477580, gasit = 0;

int main()
{
    cin>>n;
    for (int i=1; i<=n; i++)
    {
        unsigned long long int r, p;
        cin>>r>>p;
        sRez+=r;
        sPut+=p;
    }

    cin>>m;
    for (int i=1; i<=m; i++)
    {
        unsigned long long int r, p, v;
        cin>>r>>p>>v;

        if (r>=sRez && p>=sPut)
        {
            if (v<prMin)
            {
                prMin=v;
                gasit=1;
            }
        }
    }
    if (!gasit) cout<<-1;
    else cout<<prMin;
}