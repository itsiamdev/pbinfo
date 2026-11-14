#include <fstream>

using namespace std;


ifstream fin("smartphone.in");
ofstream fout("smartphone.out");

int n, x, max1, max2, c;

    
int main()
{
    fin>>c>>n;
    
    for (int i=1; i<=n; i++)
    {
        fin>>x;
        if (x>max1)
        {
            max2=max1;
            max1=x;
        }
        else if (x>max2)
            max2=x;
    }
    
    if (c==1) fout<<max1;
    else fout<<max2;
}