#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    int s=0, i, n, v[1000];
    ifstream in("n_suma.in");
    in>>n;
    for(i=1;i<=n;i++)
    {
        in>>v[i];
        s+=v[i];
    }
    ofstream out("n_suma.out");
    out<<s;
    in.close();
    out.close();
}