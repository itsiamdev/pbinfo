#include <fstream>
using namespace std;
int c[10];

int main()
{
    unsigned long long int n;
    ifstream f("maxcadou.in");
    f>>n;
    while(n)
        ++c[n%10],n/=10;
    ofstream g("maxcadou.out");
    for(int i=9;i>=0;--i)
       for(int j=1;j<=c[i];++j)
            g<<i;
    g<<'\n';
    return 0;
}