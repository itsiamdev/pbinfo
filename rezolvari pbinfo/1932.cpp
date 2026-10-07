#include <fstream>

using namespace std;

ifstream f("pc.in");
ofstream g("pc.out");

int T,x;
 
int main()
{
    f>>T;
    while(T--)
    {
        f>>x;
        if(x%2)
            g<<1<<' ';
        else
            g<<0<<' ';
    }
    return 0;
}