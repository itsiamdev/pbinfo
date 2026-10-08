#include <fstream>

using namespace std;

int main()
{
    ifstream fin("prize.in");
    ofstream fout("prize.out");

    int n, x;
    long long int s=0;
    
    fin>>n;
    for (int i=0; i<n; i++)
    {
        fin>>x;
        s+=x;
    }
    fout<<s-n+1;
}