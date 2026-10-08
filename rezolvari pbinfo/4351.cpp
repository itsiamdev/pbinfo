///Mihai Daniel
#include <fstream>
using namespace std;
int d,n;
ifstream f("echipe.in");
ofstream g("echipe.out");
int main()
{
    f>>n;
    for(d=1;d*(d+1)/2<=n;d++)
        if(d*(d+1)/2==n)
    {
        g<<0;
        return 0;
    }
    g<<n-d*(d-1)/2;
    return 0;
}